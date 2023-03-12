<script setup></script>

<template>
  <div class="socails">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-3">
          <div class="item">
            <i class="fa fa-map-marker"></i>
            <h4>location</h4>
            <p>Dolor sit, #PTH,8800 Honey Street UK.</p>
          </div>
        </div>

        <div class="col-md-3">
          <div class="item">
            <i class="fa fa-phone"></i>
            <h4>phone</h4>
            <ul class="list-unstyled">
              <li>+22 123 984 434</li>
              <li>+44 123 984 439</li>
            </ul>
          </div>
        </div>

        <div class="col-md-3">
          <div class="item">
            <i class="fa fa-envelope-open"></i>
            <h4>email</h4>
            <ul class="list-unstyled">
              <li>mail@example.com</li>
              <li>mail@example.com</li>
            </ul>
          </div>
        </div>

        <div class="col-md-3">
          <div class="item">
            <i class="fa fa-clock-o"></i>
            <h4>working hours</h4>
            <ul class="list-unstyled">
              <li>Wednesday - Sunday</li>
              <li>7:00 AM - 9:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/main.scss";
.socails {
  padding: 3em 0;
  text-transform: capitalize;

  .row .item {
    // border: 1px solid #333;/
    padding: 2em;
    box-shadow: 0px 0px 12px rgb(0 0 0 / 12%);
    margin-bottom: 28px;
  }
  i {
    font-size: 35px;
    margin: 35px 0 20px;
    color: var(--secondColor);
  }
  h4 {
    text-transform: capitalize;
  }
  p {
    font-size: 16px;
    @include media-breakpoint-up(md) {
      margin: auto;
      width: 75%;
    }
  }
}
</style>
