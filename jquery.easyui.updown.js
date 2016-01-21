$.extend($.fn.datagrid.methods, {
 		upAndDown : function(target){
 			$("body").on("keydown",function(e){
 				var row = $(target).datagrid("getSelected");
 				if(row && $(target).datagrid("options").singleSelect){	
 					var index = $(target).datagrid("getRowIndex",row);
 					if(e.keyCode == 38){//上
 						index = index == 0 ? $(target).datagrid("getRows").length-1 : index-1;
 					}else if(e.keyCode == 40){//下
 						index = index == $(target).datagrid("getRows").length-1 ? 0 : index+1;
 					}
 					$(target).datagrid("selectRow",index);
 				}
 			})
 		}
});