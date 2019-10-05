//select tab links
const $tabs = $('.tab_nav a');

//select ACTIVE tab links
const $tabActive = $('.tab_nav .active');

//select tab content boxes
const $tabContent = $('.tab_content');

//display the Function, tabActive
displayActiveTabContent($tabActive);

//function for displaying the active tab 
//note to self: what does activeTab mean? is it a global variable? (a new variable that can be called from the outside)

function displayActiveTabContent(activeTab){
    $tabContent.hide();
    const activeID = activeTab.attr('href');
    $(activeID).show();
}


//click event for tab links
$tabs.click(function(e){
    e.preventDefault();
    const $this = $(this);
    $tabs.removeClass('active');
    $this.addClass('active');
    displayActiveTabContent($this);
});