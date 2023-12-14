document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    document.querySelector(
      "#loading-iframe-map"
    ).innerHTML = `<iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="no" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.62579758178765!2d-84.0799751872204!3d9.93289475786837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e36750655857%3A0x8b0f4f71ee0eade5!2sParque%20Central%20de%20San%20Jos%C3%A9!5e0!3m2!1ses!2scr!4v1699895946307!5m2!1ses!2scr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
`;
  }, 500);
});
