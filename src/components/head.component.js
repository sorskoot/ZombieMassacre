export default AFRAME.registerComponent('head', {
    schema: {},
    init: function () {
        this.el.setAttribute('body', 'type: dynamic; mass: 5; shape: sphere; radius: 0.3');
        this.force = false;
    },
    update: function (oldData) {
       
    },
    tick: function (time, timeDelta) { 
        if(!this.el.body){
            return;
        }

        if (!this.force) {
            let position = this.el.getAttribute('position');
            
            this.el.body.velocity.set(0,10,0);
            this.el.body.angularVelocity.set(1,1,1);
            this.force = true;
        }
    },

});