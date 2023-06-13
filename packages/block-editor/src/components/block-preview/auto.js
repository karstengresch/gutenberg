/**
 * WordPress dependencies
 */
import { useResizeObserver, pure, useRefEffect } from '@wordpress/compose';
import { useSelect } from '@wordpress/data';
import { useMemo, useState, useRef } from '@wordpress/element';
import { Disabled } from '@wordpress/components';

/**
 * Internal dependencies
 */
import BlockList from '../block-list';
import Iframe from '../iframe';
import EditorStyles from '../editor-styles';
import { store } from '../../store';

// This is used to avoid rendering the block list if the sizes change.
let MemoizedBlockList;

const MAX_HEIGHT = 2000;

function ScaledBlockPreview( {
	viewportWidth,
	containerWidth,
	minHeight,
	additionalStyles = [],
} ) {
	if ( ! viewportWidth ) {
		viewportWidth = containerWidth;
	}

	const [ hasMore, setHasMore ] = useState( false );
	const resizedHeightRef = useRef( null );
	const [ contentResizeListener ] = useResizeObserver( {
		onResize( sizes ) {
			if ( sizes.height ) {
				resizedHeightRef.current = sizes.height;
				setHasMore(
					contentHeight > 0 &&
						resizedHeightRef.current > contentHeight
				);
			}
		},
	} );
	const [ contentHeight, setContentHeight ] = useState( null );

	const { styles } = useSelect( ( select ) => {
		const settings = select( store ).getSettings();
		return {
			styles: settings.styles,
		};
	}, [] );

	// Avoid scrollbars for pattern previews.
	const editorStyles = useMemo( () => {
		if ( styles ) {
			return [
				...styles,
				{
					css: 'body{height:auto;overflow:hidden;border:none;padding:0;}',
					__unstableType: 'presets',
				},
				...additionalStyles,
			];
		}

		return styles;
	}, [ styles, additionalStyles ] );

	// Initialize on render instead of module top level, to avoid circular dependency issues.
	MemoizedBlockList = MemoizedBlockList || pure( BlockList );

	const scale = containerWidth / viewportWidth;
	return (
		<>
			<Disabled
				className="block-editor-block-preview__content"
				style={ {
					position: 'relative',
					transform: `scale(${ scale })`,
					height: contentHeight * scale,
					maxHeight:
						contentHeight > MAX_HEIGHT
							? MAX_HEIGHT * scale
							: undefined,
					minHeight,
				} }
			>
				<Iframe
					contentRef={ useRefEffect( ( bodyElement ) => {
						const {
							ownerDocument: { defaultView, documentElement },
						} = bodyElement;
						documentElement.classList.add(
							'block-editor-block-preview__content-iframe'
						);
						documentElement.style.position = 'absolute';
						documentElement.style.width = '100%';

						// Necessary for contentResizeListener to work.
						bodyElement.style.boxSizing = 'border-box';
						bodyElement.style.position = 'absolute';
						bodyElement.style.width = '100%';

						const id = defaultView.requestIdleCallback( () => {
							setContentHeight( resizedHeightRef.current );
						} );

						return () => {
							defaultView.cancelIdleCallback( id );
						};
					}, [] ) }
					onLoad={ () => {
						setContentHeight( resizedHeightRef.current );
					} }
					aria-hidden
					tabIndex={ -1 }
					style={ {
						position: 'absolute',
						width: viewportWidth,
						height: contentHeight,
						pointerEvents: 'none',
						// This is a catch-all max-height for patterns.
						// See: https://github.com/WordPress/gutenberg/pull/38175.
						maxHeight: MAX_HEIGHT,
						minHeight:
							scale !== 0 && scale < 1 && minHeight
								? minHeight / scale
								: minHeight,
					} }
				>
					<EditorStyles styles={ editorStyles } />
					{ contentResizeListener }
					<MemoizedBlockList renderAppender={ false } />
				</Iframe>
			</Disabled>
			{ hasMore && (
				<div
					style={ {
						position: 'absolute',
						bottom: 0,
						left: 0,
						right: 0,
						height: '20%',
						background:
							'linear-gradient(0deg, #f0f0f0, transparent)',
					} }
				/>
			) }
		</>
	);
}

export default function AutoBlockPreview( props ) {
	const [ containerResizeListener, { width: containerWidth } ] =
		useResizeObserver();

	return (
		<>
			<div style={ { position: 'relative', width: '100%', height: 0 } }>
				{ containerResizeListener }
			</div>
			<div className="block-editor-block-preview__container">
				{ !! containerWidth && (
					<ScaledBlockPreview
						{ ...props }
						containerWidth={ containerWidth }
					/>
				) }
			</div>
		</>
	);
}
