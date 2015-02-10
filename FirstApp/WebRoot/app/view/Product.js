Ext.define('FirstApp.view.Product', {
    extend: 'Ext.Container',
    xtype: 'product',
    requires: [
    ],

    
    config: {
	     items: [
        	{
        		xtype: "button",
        		text: "查看产品",
        		centered: true
	        }
        ]
    }
});
