define( 'footer',function () {
    
        function footerComponent() {
            // footerComponentController.$inject = ['dataService','qlikService'];
            function footerComponentController() {
                var vm = this;
           
                init();
               
                function init() {
                }
            }
            return {
                bindings: {},
                controller: footerComponentController,
                controllerAs: 'cf',
                templateUrl: 'app/components/footer/footer.component.html'
            }
        }
    
        return footerComponent();
    });