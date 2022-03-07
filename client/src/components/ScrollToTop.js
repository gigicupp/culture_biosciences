import React, {useState} from 'react';

const ScrollToTop = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	  setVisible(true)
	} else if (scrolled <= 300){
	  setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	  top: 0,
	  behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<button className='scroll' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
    Scroll Up
	</button>
);
}

export default ScrollToTop;
