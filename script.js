const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
};


document.querySelector(".center")
    .addEventListener("mousemove",
        throttleFunction((dets) => {
            // Possible rotation angles
            const rotations = [-30, -15, 0, 15, 30];
            // Pick a random rotation
            const randomRotation = rotations[Math.floor(Math.random() * rotations.length)];

            let div = document.createElement('div');
            div.classList.add('imgdiv');
            div.style.left = dets.clientX + "px"
            div.style.top = dets.clientY + "px"
            document.body.appendChild(div)

            let img = document.createElement('img');
            img.setAttribute('src', "IMG-20221023-WA0000.jpg")
            // Set initial transform only for Y
            img.style.transform = `translateY(100%)`;
            div.appendChild(img)

            // Animate div rotation, img Y
            gsap.to(img, {
                y: 0,
                ease: "expo.out",
                duration: 0.6
            })
            gsap.to(div, {
                rotate: randomRotation,
                ease: "expo.out",
                duration: 0.6
            })
            gsap.to(img, {
                y: 300,
                ease: "expo.in",
                duration: 0.8,
                delay: 0.4
            })
            gsap.to(div, {
                rotate: randomRotation,
                ease: "expo.in",
                duration: 0.8,
                delay: 0.4
            })

            setTimeout(() => {
                div.remove()
            }, 900);

        }, 120));
