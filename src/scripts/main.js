$(document).ready(function () {
  $('button.c-default-navbar__mobile-button').click(function () {
    $('aside.c-side-navigation').addClass('active')
  })

  $('aside.c-side-navigation').click(function (e) {
    const target = $(e.target)
    if (
      !target.is('.c-side-navigation__wrapper') &&
      !target.is('.c-side-navigation__wrapper *')
    ) {
      $('aside.c-side-navigation').removeClass('active')
    }
  })
})
