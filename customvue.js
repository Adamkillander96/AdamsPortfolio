Vue.component('nav-component', {
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
   <a class="navbar-brand" href="#">{{ title }}</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">{{ message }}<span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>`,
  data: function () {
    return {
      title: 'Hej',
      message: 'Mer text'
    }
}
})

Vue.component('main-component', {
  template: `
  <div class="container">
   <div class="row">
    <content-component></content-component>
    <side-component></side-component>
   </div>
  </div>`,
})

Vue.component('content-component', {
  template: `<div class="col-lg-9">{{ message }}</div>`,
  data: function () {
    return {
      message: 'Hej'
    }
}
})

Vue.component('side-component', {
  template: `
  <div class="col-lg-3">Col 2
  </div>`
});

// create a root instance
new Vue({
	el: '#app'
});

