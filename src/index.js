(function () {
  const primaryContainer = document.querySelector('.primaryMenuContainer');
  const primaryNavsList = [...primaryContainer.querySelectorAll('.navList')];
  // eslint-disable-next-line no-unused-vars
  const showSubMenu = function displaySubMenu(e) {
    const subNavs = [...this.querySelectorAll('.navList')];
    if (!this.classList.contains('active')) {
      primaryNavsList.forEach((navList) => navList.classList.remove('active', 'show', 'dropEffect'));
      addClasses.call(this);
      this.classList.add('active');
    } else if (subNavs[0].classList.contains('show')) {
      removeClasses.call(this);
      this.classList.remove('active');
    } else {
      primaryNavsList.forEach((navList) => navList.classList.remove('active', 'show', 'dropEffect'));
      addClasses.call(this);
      this.classList.add('active');
    }
  };
  // eslint-disable-next-line no-unused-vars
  const addClasses = function addClassesToSubMenus(e) {
    const subNavs = [...this.querySelectorAll('.navList')];
    subNavs.forEach((subNav) => {
      subNav.classList.add('show', 'dropEffect')
    });
  };
  // eslint-disable-next-line no-unused-vars
  const removeClasses = function removeClassesFromSubMenu(e) {
    const subNavs = [...this.querySelectorAll('.navList')];
    subNavs.forEach((subNav) => subNav.classList.remove('show', 'dropEffect'));
  };
  primaryNavsList.forEach((navList) =>
    navList.addEventListener('click', showSubMenu)
  );
})();
