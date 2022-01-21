class Star_rate {

  set() {
    const stars = document.querySelectorAll('.star-rate');
    stars.forEach((star, i) => {
      let val = star.getAttribute('data-value');
      let size = star.getAttribute('data-size');
      // console.log(val, i);
      stars[i].style.width = size + 'px';
      stars[i].style.height = size + 'px';
      // (val / size) * 100 
      stars[i].style.backgroundPosition = (val * size) / 100 + 'px';
    })
  }
}
