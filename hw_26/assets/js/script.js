$(document).ready(function () {
  $(".header__burger").click(function () {
    $(".header__burger").toggleClass("active");
    $("body").toggleClass("lock");
    $(".header__nav").toggleClass("active");
  });

  $(".hero__slider").slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
  });

  $(".products__list").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 5,
    prevArrow: $(".products__slider-prev"),
    nextArrow: $(".products__slider-next"),

    responsive: [
      {
        breakpoint: 1358,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  $.getJSON("assets/json/products.json", function (data) {
    $.each(data, function (index, product) {
      let productCard = `<li class="products__item"> 
          <span class="products__label">${product.status}</span> 
          <img src="${product.image}" alt="${product.name}" class="products__img"> 
          <h3 class="products__title">${product.name}</h3> 
          <p class="products__price">${product.price}</p>
          </li>
      `;

      $(".products__list").slick("slickAdd", productCard);

      updateLabelColors();
    });
  });

  $(".products__list").on("afterChange", function (event, slick, currentSlide) {
    updateLabelColors();
  });

  function updateLabelColors() {
    $(".products__label").each(function () {
      if ($(this).text() === "Sold") {
        $(this).addClass("products__label--sold");
      } else if ($(this).text() === "In Stock") {
        $(this).addClass("products__label--in-stock");
      }
    });
  }

  $(".partners__list").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 9,
    prevArrow: $(".partners__slider-prev"),
    nextArrow: $(".partners__slider-next"),

    responsive: [
      {
        breakpoint: 1358,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 923,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 2,
        },
      },
    ],
  });

  $.getJSON("assets/json/partners.json", function (data) {
    $.each(data, function (index, partner) {
      let partnerCard = `<li class="partners__item"> 
          <svg class="partners__logo">
            <use xlink:href="${partner.image}"></use>
          </svg>
          </li>
      `;

      $(".partners__list").slick("slickAdd", partnerCard);
    });
  });
});
