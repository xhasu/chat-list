(() => {
  // feather icons
  feather.replace();

  // tabs
  const tabs = document.querySelectorAll('.tabs .tab-item');
  let lastTabItemclicked = null;

  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();

      let targetClassList = e.currentTarget.classList;
      let directionEnter = lastTabItemclicked <= idx ? 'left' : 'right';
      let directionLeave = lastTabItemclicked > idx ? 'left': 'right';

      let arr = Array.from(tabs);
      arr.splice(idx, 1);

      arr = arr
        .filter((t) => t.classList.contains('active'))
        .map((t) => {
          t.classList.add(`leave-${directionLeave}`);
          return t;
        });

      
      targetClassList.contains('active') == false && targetClassList.add('active', `enter-${directionEnter}`);

      setTimeout(() => {
        targetClassList.remove(
          `enter-${directionEnter}`,
          `leave-${directionLeave}`
        );

        arr.forEach((t) => t.classList.remove('active', `leave-${directionLeave}`));
      }, 400);

      lastTabItemclicked = idx;

    });
  });
})();
