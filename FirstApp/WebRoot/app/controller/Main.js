Ext.define('FirstApp.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
		refs: {
		    main: "#mainContent",
		},

		control: {
		    "segmentedbutton": {
		        toggle: 'onButtonToggle'
		    }
		},
		
		views: [
			'Product'
		]
    
    },
    
	cacheContent:{
	},


    launch: function () {
		var me=this,
			items=me.getMain().getItems();
		me.cacheContent["首页"]=items.getAt(0);
		me.cacheContent["产品"]=items.getAt(1);
    },

	onButtonToggle: function (container, button, pressed) {
		var me=this;
		if(pressed == true){
			var key= button.getText(),
				main= me.getMain(),
				item= me.cacheContent[key];
			if(item){
				main.setActiveItem(item);
			}else{				
				console.log(key);
			}
		}
	}

});
