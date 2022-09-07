import React, { Component } from "react";
import "../css/contactUs.css";

class About extends Component {
  state = {};
  render() {
    return (

      <div className="container header1">
        <div className="row">
        <div className="col header1">
              <img src="https://opensooqui2.os-cdn.com/os_web/desktop/countryPageHeader.png" alt="elsok"/>
          <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-3">
            <h3>مرحباً بكم في السوق </h3>
            <p>نحن هُنا في موقع السوق  -  نسعى إلى إنشاء سوق إلكتروني خاص بكل بلد من البلدان العربية. يمكنك من خلال هذا الموقع أن تدخل إلى السوق الإلكتروني الخاص ببلدك، ومن ثـم إضافة إعلانات مبّوبة مجانية، أو تصفّح إعلانات الآخرين من أهل بلدك. تأتي فكرة السوق المفتوح لتوفير سوق إلكتروني يمكن من خلاله ايصال البائع بالمشتري من أهل البلد أو حتى أهل المدينة ذاتها، لعرض وطلب كافة الخدمات والمنتجات الجديدة والمستعملة.</p>
            <hr/>
            </div>
        </div>
        <div className="row">
          <div className="col">
            <img src="https://opensooqui2.os-cdn.com/os_web/desktop/osMobilePhoneLight.jpg" className="col-md-6 float-md-end mb-3 ms-md-3" alt="elsok"/>
          </div>
          <div className="col">
            <h3>ماذا يوجد على السوق المفتوح؟</h3>
            <p>
            تيح لك عزيزي المستخدم على هذه المنصة العديد من خدمات الإعلان والتسويق الإلكتروني لمحتوى متخصص بالخدمات ومختلف المجالات التي تتعلّق بالبحث عن وظائف وبيع وشراء السلع والمنتجات كافة بالتواصل المباشر مع الفئات المستهدفة عن طريق رسائل الدردشة والاتصال الهاتفي والتعليقات.
            </p>
            <p>
              أنت اليوم كـ فرد أو شركة تستطيع أن تحقّق مبيعاتك بأسرع وقت عن طريق
            </p>
            <p>
            استخدام موقع أو تطبيق السوق المفتوح
            <br/>
            إنشاء حساب موثق خاص بك (كعلامة تجارية)
            <br/>
            الإستعانة بفريق مبيعات السوق المفتوح
            <br/>
            شراء الحزم والخدمات الإعلانية المُوصى بها
            <br/>
            عرض منتجك/خدمتك بشكل ملفت وتفاصيل صحيحة
            </p>
            <h3>رؤيتنا</h3>
            <p>تتجلّى رؤيتنا في السوق المفتوح بتمكين الأفراد والشركات من تحقيق الربح من خلال خلق فرص اقتصادية جيدة بمردودها، وتحقيق الرغبات وتلبية الاحتياجات وتطوير المجتمعات. </p>
            </div>
          </div>
          <div className="col">
            <img src="https://opensooqui2.os-cdn.com/os_web/desktop/osSectionsLight.jpg" className="col-md-6 float-md-end mb-3 ms-md-3" alt="elsok"/>
          </div>
          <div className="col mt-4">
              <h3>وأخيرا نرجوا منكم احترام الموقع وأدخال محتوى لائق ومفيد نستفيد ونفيدكم</h3>
              <br />
              <h3> مع كامل تحياتنا من فريق السوق</h3>
            </div>
      </div>
      
    );
  }
}

export default About;
