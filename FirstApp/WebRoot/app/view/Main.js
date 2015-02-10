Ext.define('FirstApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
    	'Ext.SegmentedButton'
    ],

    
    config: {
		layout: "vbox",
		
		 items: [
			{
				height: 40,
		        items:[
					{
					    xtype: 'segmentedbutton',
						centered: true,
					    items: [
					        { text: '首页', pressed: true },
					        { text: '产品' },
					        { text: '搜索' },
					        { text: '更多'}
					    ]
					}
		        ]
		    },
		    {
		    	flex: 1,
		    	id: "mainContent",
		    	layout: "card",
		    	items:[
					{
						html: "首页"
					},
					{xtype: "product"}
		    	]
		    }
		]
    }
});
