// Color change of folder and trees (shape names used from 'index.js' file)
function reColor() {

	// Closed folder colors
	exportRoot.main.main2.logo.shape.graphics.c().lf([card_snow_traces_color_1, card_snow_traces_color_2],[0,1],26,-39.4,-45.4,49.8).s().p("Ar7GxIVMvuICsAAI35R7g"); // Snow traces
	exportRoot.main.main2.logo.shape_1.graphics.c().lf([card_snow_traces_color_1, card_snow_traces_color_2],[0,1],25.3,-38.6,-46.1,50.6).s().p("ApHEoIPZrbIC2AAIyPNng"); // Snow traces
	exportRoot.main.main2.logo.shape_4.graphics.c().lf([card_gradient_color_1, card_gradient_color_2],[0,1],110.7,-178.2,-246.2,416.3).s().p("A/O1aQAAhGAygyQAygyBFAAMA5NgAEQBGAAAyAyQAyAyAABGMgADAtjMg+gAAEg"); // Logo area

	// Opened folder colors
	exportRoot.main.main2.shape.graphics.c().lf([card_gradient_color_1, card_gradient_color_2],[0,1],241.5,-408.4,-115.4,186.1).s().p("A+gXXQgxgyAAhGMAADgtjMA+ggAEMgADAtjQAABGgyAyQgxAyhHAAMg5MAADIgCABQhFAAgygyg"); // Greeteng area
	exportRoot.main.main2.instance_2.shape_4.graphics.c().lf([card_gradient_color_1, card_gradient_color_2],[0,1],110.7,-178.2,-246.2,416.3).s().p("A/O1aQAAhGAygyQAygyBFAAMA5NgAEQBGAAAyAyQAyAyAABGMgADAtjMg+gAAEg"); // Trees area
	exportRoot.main.main2.instance_2.shape.graphics.c().lf([card_snow_traces_color_1, card_snow_traces_color_2],[0,1],26,-39.4,-45.3,49.8).s().p("Ar7GxIVMvuICsAAI35R7g"); // Snow traces
	exportRoot.main.main2.instance_2.shape_1.graphics.c().lf([card_snow_traces_color_1, card_snow_traces_color_2],[0,1],25.3,-38.6,-46,50.6).s().p("ApHEoIPZrbIC2AAIyPNng"); // Snow traces

	// Centered fold shadow on card gradient
	exportRoot.main.main2.instance_3.shape.graphics.c().lf([shadow_gradient_color_1, shadow_gradient_color_2],[0,1],2.2,17.9,2.2,-29).s().p("A/QDbIABoIMA+ggAEIgBJjg");
	exportRoot.main.main2.instance_3.alpha = shadow_alpha/100; 
	exportRoot.main.main2.instance_3.visible = shadow_visible;

	// Xmas trees colors
	exportRoot.main.main2.tree1.instance.shape.graphics.c().lf([trees_gradient_color_1, trees_gradient_color_2],[0,1],136.2,-123.6,-109.8,122.4).s().p("Aw9TaIghgBQhDgBgBgvQgBgwBChBIBPhQQBChBgBgwQgBgwhDgBIk8gGQhDgBAHgeQAGgeBMgpIKLlgQBMgpAGgeQAHgehDgCIiIgCQhDgBAHgfQAHgeBMgqIKYlqQBMgpAGgfQAHgfhDgBIiIgCQhDgBAHgfQAHgfBMgpIXEsrQBMgqAsAWQAsAXgPBJIiKKxQgPBJg6AzQg5AzhDgBIiJgDQhDgBg5AzQg6AzgOBJIgsDjQgOBJg6AzQg6AzhDgBIiIgDQhCgBg5AzQg4AygNBJIgmDZQgNBIg4AzQg5AyhCgBIk8gFQhDgCheAuQheAuhCBBIhPBQQhCBCheAtQhdAthBAAIgDAAg"); // Tree 1
	exportRoot.main.main2.tree2.instance.shape.graphics.c().lf([trees_gradient_color_1, trees_gradient_color_2],[0,1],136.2,-123.6,-109.8,122.4).s().p("Aw9TaIghgBQhDgBgBgvQgBgwBChBIBPhQQBChBgBgwQgBgwhDgBIk8gGQhDgBAHgeQAGgeBMgpIKLlgQBMgpAGgeQAHgehDgCIiIgCQhDgBAHgfQAHgeBMgqIKYlqQBMgpAGgfQAHgfhDgBIiIgCQhDgBAHgfQAHgfBMgpIXEsrQBMgqAsAWQAsAXgPBJIiKKxQgPBJg6AzQg5AzhDgBIiJgDQhDgBg5AzQg6AzgOBJIgsDjQgOBJg6AzQg6AzhDgBIiIgDQhCgBg5AzQg4AygNBJIgmDZQgNBIg4AzQg5AyhCgBIk8gFQhDgCheAuQheAuhCBBIhPBQQhCBCheAtQhdAthBAAIgDAAg"); // Tree 2
	exportRoot.main.main2.tree3.instance.shape.graphics.c().lf([trees_gradient_color_1, trees_gradient_color_2],[0,1],136.2,-123.6,-109.8,122.4).s().p("Aw9TaIghgBQhDgBgBgvQgBgwBChBIBPhQQBChBgBgwQgBgwhDgBIk8gGQhDgBAHgeQAGgeBMgpIKLlgQBMgpAGgeQAHgehDgCIiIgCQhDgBAHgfQAHgeBMgqIKYlqQBMgpAGgfQAHgfhDgBIiIgCQhDgBAHgfQAHgfBMgpIXEsrQBMgqAsAWQAsAXgPBJIiKKxQgPBJg6AzQg5AzhDgBIiJgDQhDgBg5AzQg6AzgOBJIgsDjQgOBJg6AzQg6AzhDgBIiIgDQhCgBg5AzQg4AygNBJIgmDZQgNBIg4AzQg5AyhCgBIk8gFQhDgCheAuQheAuhCBBIhPBQQhCBCheAtQhdAthBAAIgDAAg"); // Tree 3

	// Toys on tree radial gradients
	exportRoot.main.main2.toys.toy_anim1.instance.shape.graphics.c().rf([tree_toys_gradient_color_1,tree_toys_gradient_color_2,tree_toys_gradient_color_3,tree_toys_gradient_color_4],[0,0.78,0.91,1],2.8,1.8,0,2.8,1.8,10.9).s().p("AhRBSQgUgUAKgnQAJglAigiQAigiAlgJQAngKAUAUQAUAUgKAnQgJAlgiAiQgiAiglAJQgNADgKAAQgWAAgOgNg");
	exportRoot.main.main2.toys.toy_anim2.instance.shape.graphics.c().rf([tree_toys_gradient_color_1,tree_toys_gradient_color_2,tree_toys_gradient_color_3,tree_toys_gradient_color_4],[0,0.78,0.91,1],2.8,1.8,0,2.8,1.8,10.9).s().p("AhRBSQgUgUAKgnQAJglAigiQAigiAlgJQAngKAUAUQAUAUgKAnQgJAlgiAiQgiAiglAJQgNADgKAAQgWAAgOgNg");
	exportRoot.main.main2.toys.toy_anim3.instance.shape.graphics.c().rf([tree_toys_gradient_color_1,tree_toys_gradient_color_2,tree_toys_gradient_color_3,tree_toys_gradient_color_4],[0,0.78,0.91,1],2.8,1.8,0,2.8,1.8,10.9).s().p("AhRBSQgUgUAKgnQAJglAigiQAigiAlgJQAngKAUAUQAUAUgKAnQgJAlgiAiQgiAiglAJQgNADgKAAQgWAAgOgNg");
	exportRoot.main.main2.toys.toy_anim4.instance.shape.graphics.c().rf([tree_toys_gradient_color_1,tree_toys_gradient_color_2,tree_toys_gradient_color_3,tree_toys_gradient_color_4],[0,0.78,0.91,1],2.8,1.8,0,2.8,1.8,10.9).s().p("AhRBSQgUgUAKgnQAJglAigiQAigiAlgJQAngKAUAUQAUAUgKAnQgJAlgiAiQgiAiglAJQgNADgKAAQgWAAgOgNg");
	exportRoot.main.main2.toys.toy_anim5.instance.shape.graphics.c().rf([tree_toys_gradient_color_1,tree_toys_gradient_color_2,tree_toys_gradient_color_3,tree_toys_gradient_color_4],[0,0.78,0.91,1],2.8,1.8,0,2.8,1.8,10.9).s().p("AhRBSQgUgUAKgnQAJglAigiQAigiAlgJQAngKAUAUQAUAUgKAnQgJAlgiAiQgiAiglAJQgNADgKAAQgWAAgOgNg");
	exportRoot.main.main2.toys.toy_anim6.instance.shape.graphics.c().rf([tree_toys_gradient_color_1,tree_toys_gradient_color_2,tree_toys_gradient_color_3,tree_toys_gradient_color_4],[0,0.78,0.91,1],2.8,1.8,0,2.8,1.8,10.9).s().p("AhRBSQgUgUAKgnQAJglAigiQAigiAlgJQAngKAUAUQAUAUgKAnQgJAlgiAiQgiAiglAJQgNADgKAAQgWAAgOgNg");
	
	// Gift 1 colors
	exportRoot.main.main2.gift1.instance.shape.graphics.c().f(gift1_ribbon_light).s().p("AkWG0IGompIgEm/ICFABIAEG/ImnGpg");
	exportRoot.main.main2.gift1.instance.shape_1.graphics.c().f(gift1_ribbon_light).s().p("AjeBBIgBiFIG+AEIABCFg");
	exportRoot.main.main2.gift1.instance.shape_2.graphics.c().f(gift1_ribbon_dark).s().p("AjUCSIGomoIABCGImoGng");
	exportRoot.main.main2.gift1.instance.shape_3.graphics.c().f(gift1_box_med).s().p("AjdDeIgDm+IG+ADIAEG/g");
	exportRoot.main.main2.gift1.instance.shape_4.graphics.c().f(gift1_box_light).s().p("AkiDUIGomoICdABImoGog");
	exportRoot.main.main2.gift1.instance.shape_5.graphics.c().f(gift1_box_dark).s().p("AjUCGIGomoIABCdImnGog");
	exportRoot.main.main2.gift1.instance.shape_6.graphics.c().f(gift1_box_dark).s().p("AjUCGIGomoIABCdImoGog");
	exportRoot.main.main2.gift1.instance.shape_7.graphics.c().f(gift1_box_light).s().p("AkiDUIGomoICdACImoGng");

	// Gift 2 colors
	exportRoot.main.main2.gift2.instance.shape.graphics.c().f(gift2_ribbon_dark).s().p("Ah7BVID2j2IABBNIj2D2g");
	exportRoot.main.main2.gift2.instance.shape_1.graphics.c().f(gift2_ribbon_med).s().p("AiBAmIgBhNIEEACIAABNg");
	exportRoot.main.main2.gift2.instance.shape_2.graphics.c().f(gift2_ribbon_light).s().p("AihB7ID2j2IBNABIj2D2g");
	exportRoot.main.main2.gift2.instance.shape_3.graphics.c().f(gift2_ribbon_med).s().p("AglCCIgCkDIBNABIACEDg");
	exportRoot.main.main2.gift2.instance.shape_4.graphics.c().f(gift2_box_med).s().p("AiACBIgCkDIEDACIACEDg");
	exportRoot.main.main2.gift2.instance.shape_5.graphics.c().f(gift2_box_dark).s().p("AiBgFID2j4QAaB9gYCFIAAABIAAAAIj2D4g");
	exportRoot.main.main2.gift2.instance.shape_6.graphics.c().f(gift2_box_light).s().p("Aj9B9QBvidCJhaQBUgDBRAAIBeAFIj3D3g");

	// Gift 3 colors
	exportRoot.main.main2.gift3.instance.shape.graphics.c().f(gift3_ribbon_dark).s().p("AiYBoIEwkvIABBfIkwEwg");
	exportRoot.main.main2.gift3.instance.shape_1.graphics.c().f(gift3_ribbon_med).s().p("AigAvIAAhfIFAACIABBfg");
	exportRoot.main.main2.gift3.instance.shape_2.graphics.c().f(gift3_box_dark).s().p("AjHCYIEwkwIBfABIkwEwg");
	exportRoot.main.main2.gift3.instance.shape_3.graphics.c().f(gift3_ribbon_med).s().p("AgtCgIgDlAIBeABIADFAg");
	exportRoot.main.main2.gift3.instance.shape_4.graphics.c().f(gift3_box_med).s().p("AifCfIgClAIFBADIACFAg");
	exportRoot.main.main2.gift3.instance.shape_5.graphics.c().f(gift3_box_light).s().p("AhDCdIAAAAIj1gCIExkwQCEgQA8AQICAADIkxEwg");
	exportRoot.main.main2.gift3.instance.shape_6.graphics.c().f(gift3_ribbon_light).s().p("AicgHIEwkxQAQCYgNCYIgBABIABAPIkwExg");

	// Gift 4 colors
	exportRoot.main.main2.gift4.instance.shape.graphics.c().f(gift4_ribbon_dark).s().p("AhKA0ICWiWIAAAvIiWCWg");
	exportRoot.main.main2.gift4.instance.shape_1.graphics.c().f(gift4_ribbon_med).s().p("AhOAXIAAguICdABIAAAug");
	exportRoot.main.main2.gift4.instance.shape_2.graphics.c().f(gift4_ribbon_light).s().p("AhiBLICWiWIAvABIiWCWg");
	exportRoot.main.main2.gift4.instance.shape_3.graphics.c().f(gift4_ribbon_med).s().p("AgWBPIgBieIAuAAIABCeg");
	exportRoot.main.main2.gift4.instance.shape_4.graphics.c().f(gift4_box_med).s().p("AhOBPIgBieICdABIACCeg");
	exportRoot.main.main2.gift4.instance.shape_5.graphics.c().f(gift4_box_light).s().p("AiaBMICXiWQBOgGBMAHIAAABIAEAAIiXCUIAAACg");
	exportRoot.main.main2.gift4.instance.shape_6.graphics.c().f(gift4_box_dark).s().p("AhMgDICWiXQAFA0gCAzIAAAAIgCA3QhHBbhPA8g");

	// Example without gradient
	//exportRoot.main.main2.logo.shape_4.graphics._fill.style = "#FF0000"; // Logo area 
}
