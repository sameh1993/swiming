<template>
  <section class="contactus">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="left">
            <div class="content">
              <h4>contact us</h4>
              <ul class="list-unstyled">
                <li><i class="fa fa-phone"></i> +4 2328 29202</li>
                <li><i class="fa fa-envelope"></i> wistonswimpool@gmail.com</li>
                <li>
                  <i class="fa fa-map-marker"></i> 4th avenue, Wiston Swimming
                  Pool
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <dv class="right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221005.66378065516!2d31.39855175787929!3d30.05941420525159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1678469495117!5m2!1sar!2seg"
              width="100%"
              height="400px"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </dv>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/main.scss";
.contactus {
  padding: 4em 0;
  background-color: #00354b;
  padding-top: 51px;
  background-image: url(/src/assets/images/bg1-trainer.jpg);
  background-size: 100% 21%;
  background-position: center top;
  background-repeat: no-repeat;
  padding-top: 9em;

  @include media-breakpoint-down(md) {
    background-size: 100% 12%;
  }
  .left {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .content {
      width: 70%;
      h4 {
        font-size: 55px;
        margin-bottom: 40px;
        text-transform: capitalize;
      }
      ul {
        li {
          margin: 20px 20px 20px 0;
          text-transform: capitalize;
          i {
            height: 37px;
            width: 37px;
            background-color: #fff;
            border-radius: 50%;
            font-size: 16px;
            line-height: 37px;
            text-align: center;
            transform: scale(0.95);
            color: #000;
            margin-right: 7px;
          }
        }
      }

      @include media-breakpoint-between(md, lg) {
        width: 100%;
        h4 {
          font-size: 30px;
        }
      }

      @include media-breakpoint-down(md) {
        width: 100%;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
