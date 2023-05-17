import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
export default function save() {
	return (
		<div { ...useBlockProps.save({
      className: 'uncommon-testimonial-slider',
    }) }>
      <div className='swiper'>
        <div className='swiper-wrapper'>
          <InnerBlocks.Content />
        </div>
        <div class="swiper-pagination"></div>
      </div>
		</div>
	);
}
