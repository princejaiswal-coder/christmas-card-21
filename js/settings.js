// ------------------------------------------------------------
//
//     POCKET XMAS CARD by Kontramax
//
// ------------------------------------------------------------
//
// Initial setup - you can change parameters here:

// Main animation settings
var main_animation_x = 0; // Animation position by X (in pixels)
var main_animation_y = 20; // Animation position by Y (in pixels)
var main_animation_scale = 120; // Animation sale factor (in percents)

// Logo settings
var logo_enable = true; // Show or hide logo on card (true, false)
var logo_path = "images/logo.png"; // Specify here path to your logo
var logo_x = 3; // Logo position corrections by X (in pixels)
var logo_y = -15; // Logo position corrections by Y (in pixels)
var logo_scale = 43; // Logo sale factor (in percents)

// Greeting text settings
var textbox_message = "Dear friends!\nPut this card in your pocket and Christmas mood always will be with you. Be happy and keep smiling!"; // Use \n as line break
var textbox_font = "normal 27px miso-regular"; // Font face settings
var textbox_color = "#DBF5FF"; // Greeting text color
var textbox_x = 0; // Greeting textbox position by X (in pixels)
var textbox_y = -70; // Greeting textbox position by Y (in pixels)
var textbox_scale = 100; // Greeting textbox scale factor (in percents)
var textbox_linewidth = 350; // Width of text box
var textbox_lineheight = 32; // Font line height
var textbox_align = "center"; // Horizontal alignment (left, center, right)
var textbox_baseline = "middle"; // Baseline alignment (top, middle, bottom)

// Button settings
var button_enable = true; // Show button below greeting (true, false)
var button_text = "Merry Christmas!"; // Text on button
var button_text_hover = " Buy Pocket Card "; // Text on hovered button
var button_url = "https://rekonise.me/CyberStain"; // URL path when click on button
var button_url_target = "_blank"; // Targeting URL (_blank, _self, _parent, _top)
var button_font = "normal 23px miso-regular"; // Font face settings
var button_space = 28; // Distance between greeting text and button
var button_margin_x = 36; // Distance from button text to button borders by X
var button_margin_y = 20; // Distance from button text to button borders by Y
var button_rounded = true; // Rectangle or rounded button (true, false)
var button_text_color = "#6283B3"; // Button text color when idle
var button_text_color_hover = "#DBF5FF"; // Button text color on hover
var button_fill_color = "#DBF5FF"; // Button fill color when idle
var button_fill_color_hover = "#EF1D4B"; // Button fill color on hover

// Music settings
var music_path = "sounds/music.mp3"; // Path to music
var sound_in_path = "sounds/sounds-in.mp3"; // Path to sound-in FX
var sound_out_path = "sounds/sounds-out.mp3"; // Path to sound-out FX
var music_loop = true; // Repeat music file (true, false)
var mute_all = false; // Mute music and sounds (true, false)

// Main recolor settings
var card_gradient_color_1 = "#808B9D"; // Default: #808B9D
var card_gradient_color_2 = "#6084AB"; // Default: #6084AB
var card_snow_traces_color_1 = "#667591"; // Default: #667591
var card_snow_traces_color_2 = "#6084AB"; // Default: #6084AB
var trees_gradient_color_1 = "#D9E0E3"; // Default: #D9E0E3
var trees_gradient_color_2 = "#9CA6B0"; // Default: #9CA6B0
var tree_toys_gradient_color_1 = "#FF004D"; // Default: #FF004D
var tree_toys_gradient_color_2 = "#4F212B"; // Default: #4F212B
var tree_toys_gradient_color_3 = "#6A1A2F"; // Default: #6A1A2F
var tree_toys_gradient_color_4 = "#771631"; // Default: #771631
var shadow_visible = true; // Visibility of fold shadow on card
var shadow_alpha = 100; // Alpha of fold shadow on card (in percents), default: 100
var shadow_gradient_color_1 = "rgba(85, 119, 153, 0)"; // (with alpha) Default: rgba(85, 119, 153, 0)
var shadow_gradient_color_2 = "#587797"; // Default: #587797

// Gift 1 recolor settings
var gift1_box_light = "#C51144"; // Default: #C51144
var gift1_box_med = "#920736"; // Default: #920736
var gift1_box_dark = "#530025"; // Default: #530025
var gift1_ribbon_light = "#FFFFFF"; // Default: #FFFFFF
var gift1_ribbon_dark = "#919191"; // Default: #919191

// Gift 2 recolor settings
var gift2_box_light = "#5D5964"; // Default: #5D5964
var gift2_box_med = "#403F4D"; // Default: #403F4D
var gift2_box_dark = "#1E1E23"; // Default: #1E1E23
var gift2_ribbon_light = "#FFB700"; // Default: #FFB700
var gift2_ribbon_med = "#FF9900"; // Default: #FF9900
var gift2_ribbon_dark = "#915700"; // Default: #915700

// Gift 3 recolor settings
var gift3_box_light = "#3A91EE"; // Default: #3A91EE
var gift3_box_med = "#137DD2"; // Default: #137DD2
var gift3_box_dark = "#3D64A6"; // Default: #3D64A6
var gift3_ribbon_light = "#1B5389"; // Default: #1B5389
var gift3_ribbon_med = "#30467A"; // Default: #30467A
var gift3_ribbon_dark = "#0B2C42"; // Default: #0B2C42

// Gift 4 recolor settings
var gift4_box_light = "#FFD200"; // Default: #FFD200
var gift4_box_med = "#E0AB00"; // Default: #E0AB00
var gift4_box_dark = "#9C4D00"; // Default: #9C4D00
var gift4_ribbon_light = "#C40451"; // Default: #C40451
var gift4_ribbon_med = "#7A002B"; // Default: #7A002B
var gift4_ribbon_dark = "#33000E"; // Default: #33000E

// Settings for tests
var stop_animation_on_button_click = true; // Beta: slow stop animations after button click
var center_page_mark_enable = false; // Show marks for centering tests
var show_test_info = false; // Show fps, dpr etc. info for tests

// ------------------------------------------------------------
