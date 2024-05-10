import React, { useEffect } from 'react';
import '../styles.css'; // Make sure this path is correct for your CSS

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor1');
    const cursorInner = document.querySelector('.cursor2');
    const links = document.querySelectorAll('a');
    const navbar = document.querySelector('.navbar');
    const caseStudiesSection = document.querySelector('#caseStudies');

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      cursorInner.style.left = `${x}px`;
      cursorInner.style.top = `${y}px`;
    };

    const addHoverEffect = () => {
      cursor.classList.add('hover');
    };

    const removeHoverEffect = () => {
      cursor.classList.remove('hover');
    };

    document.addEventListener('mousemove', moveCursor);
    links.forEach(link => {
      link.addEventListener('mouseover', addHoverEffect);
      link.addEventListener('mouseleave', removeHoverEffect);
    });

    document.addEventListener('mousedown', () => {
      cursor.classList.add('click');
      cursorInner.classList.add('cursorinnerhover');
    });

    document.addEventListener('mouseup', () => {
      cursor.classList.remove('click');
      cursorInner.classList.remove('cursorinnerhover');
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseover', addHoverEffect);
        link.removeEventListener('mouseleave', removeHoverEffect);
      });
      document.removeEventListener('mousedown', () => {
        cursor.classList.remove('click');
        cursorInner.classList.remove('cursorinnerhover');
      });
      document.removeEventListener('mouseup', () => {
        cursor.classList.remove('click');
        cursorInner.classList.remove('cursorinnerhover');
      });
    };
  }, []);

  return (
    <>
      <div className="cursor1"></div>
      <div className="cursor2"></div>
    </>
  );
};

export default CustomCursor;



  