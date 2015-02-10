Ext.define('FirstApp.controller.Product', {
    extend: 'Ext.app.Controller',

    config: {
      
        control: {
            "button[text=查看产品]": {
                tap: 'onButtonTap'
            }
        }
        
    },
    

    launch: function () {
    },

    onButtonTap: function (cm,e,opts) {
    	Ext.Msg.alert("查看产品");
    }

});
