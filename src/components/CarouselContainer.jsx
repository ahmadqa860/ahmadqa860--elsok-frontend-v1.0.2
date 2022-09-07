import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import slideImage1 from '../img/bg-img/slideImage1.jpeg';
import slideImage2 from '../img/bg-img/slideImage2.jpg';
import slideImage3 from '../img/bg-img/slideImage3.jpg';
import "../css/carousel.css";

const CarouselContainer = () => {
  return (
    <div className="mt-5 shadow _area">
      <Carousel fade={true} pause={false}>
        <Carousel.Item  interval={8000}>
          <img
            className="__items"
            src={slideImage1}
            alt="First slide"
          />
          <Carousel.Caption >
            <h3>مرحباً بكم في سوق</h3>
            <p>اشتري . دردش . بيع</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <img
            className="__items"
            src={slideImage2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>أبدأ مع السوق</h3>
            <p>كن أول المشتركين في موقعنا</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <img
            className="__items"
            src={slideImage3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>جودة الإعلانات على السوق</h3>
            <p>يمكنك زيادة جودة إعلانك لجلب عدد مشاهدات أكبر وزيادة فرصتك في بيع سلعتك أو تقديم خدمتك</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
  )
}

export default CarouselContainer;

