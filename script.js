const tabItem = document.querySelectorAll('.tabs-item');

const tabContentItems = document.querySelectorAll('.tab-content-item');


function selectItem(e){
  removeBorder();
  removeShow();

  this.classList.add('tab-border');

  const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}


function removeBorder(){
  tabItem.forEach(item => {
    item.classList.remove('tab-border');
  });
}

function removeShow(){
  tabContentItems.forEach(item => {
    item.classList.remove('show');
  });
}

tabItem.forEach(item => {
  item.addEventListener('click',selectItem);
});