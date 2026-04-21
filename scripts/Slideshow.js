<script>
    const slides = document.querySelectorAll('.slideshow .slide');
    let current = 0;

    setInterval(() => {
        slides[current].classList.remove('active');   // hide current
        current = (current + 1) % slides.length;      // move to next (loops back to 0)
        slides[current].classList.add('active');       // show next
    }, 3000); // swipes every 3 seconds — change this number to speed up or slow down
</script>