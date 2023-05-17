import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps({
      className: 'uncommon-testimonial-slider',
    }) }>
      <div className='label'>Testimonial Slider</div>
			<InnerBlocks
        allowedBlocks={ [ 'core/quote' ] }
        template={ [
          [ 'core/quote', { placeholder: 'Add testimonial', citation: 'Name of source', className: 'swiper-slide' } ],
          [ 'core/quote', { placeholder: 'Add testimonial', citation: 'Name of source', className: 'swiper-slide' } ],
          [ 'core/quote', { placeholder: 'Add testimonial', citation: 'Name of source', className: 'swiper-slide' } ],
          [ 'core/quote', { placeholder: 'Add testimonial', citation: 'Name of source', className: 'swiper-slide' } ]
        ] }
        templateLock={ false }
      />
		</div>
	);
}
