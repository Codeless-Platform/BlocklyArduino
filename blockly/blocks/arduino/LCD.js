/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino Digital and Analogue input and output
 *     functions. The Arduino function syntax can be found at
 *     http://arduino.cc/en/Reference/HomePage
 *
 * TODO: maybe change this to a "PIN" BlocklyType
 */
"use strict";

goog.provide("Blockly.Blocks.lcd");

goog.require("Blockly.Blocks");
goog.require("Blockly.Types");

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.lcd.HUE = 50;

Blockly.Blocks["lcd_begin"] = {
  /**
   * Block for creating a lcd.begin() function.
   * @this Blockly.Block
   */
  init: function () {
    this.setHelpUrl("http://arduino.cc/en/Reference/LiquidCrystalBegin");
    this.setColour(Blockly.Blocks.lcd.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARD_LCD_BEGIN)
      .appendField("Set LCD On")
      .appendField("lcd#")
      .appendField(
        new Blockly.FieldDropdown([["1"], ["2"], ["3"], ["4"]]),
        "ID")
      .appendField("lcd type")
      .appendField(
        new Blockly.FieldDropdown([["standard"], ["i2c"]]),
        "LCDTYPE"
      )
      .appendField("lcd size")
      .appendField(
        new Blockly.FieldDropdown([["16x2"], ["16x4"], ["20x4"]]),
        "LCDSIZE"
      )


    ;
    

    // Initialize standard pin inputs (visible by default)
    this.standardPinsInput_ = this.appendDummyInput()
      .appendField("RS")
      .appendField(
        new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins),
        "RS"
      )
      .appendField("EN")
      .appendField(
        new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins),
        "EN"
      )
      .appendField("D4")
      .appendField(
        new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins),
        "D4"
      )
      .appendField("D5")
      .appendField(
        new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins),
        "D5"
      )
      .appendField("D6")
      .appendField(
        new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins),
        "D6"
      )
      .appendField("D7")
      .appendField(
        new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins),
        "D7"
      );

    // Initialize I2C address input (hidden by default)
    this.i2cAddressInput_ = this.appendDummyInput()
      .appendField("I2C Address")
      .appendField(
        new Blockly.FieldDropdown([
          ["0x27"],
          ["0x3F"],
          ["0x20"],
          ["0x38"],
          ["0x3E"],
          ["0x62"],
          ["0x3C"],
          ["0x3D"],
        ]),
        "I2C_ADDRESS"
      )
      ;

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARD_LCD_BEGIN_TIP);
  },

  /**
   * Updates the inputs based on the selected LCD type.
   * @param {string} type - The selected LCD type ('standard' or 'i2c').
   */
  updateType_: function (type) {
    if (type === 'standard') {
      this.standardPinsInput_.setVisible(true);
      this.i2cAddressInput_.setVisible(false);
    } else if (type === 'i2c') {
      this.standardPinsInput_.setVisible(false);
      this.i2cAddressInput_.setVisible(true);
    }
  },

  /**
   * Called whenever the LCD type field changes.
   * Updates the inputs based on the selected LCD type.
   */
  onchange: function () {
    var type = this.getFieldValue('LCDTYPE');
    this.updateType_(type);
  }
};







Blockly.Blocks["lcd_print"] = {
  /**
   * Block for creating a lcd.print() function.
   * @this Blockly.Block
   */
  init: function () {
    this.setHelpUrl("http://arduino.cc/en/Reference/LiquidCrystalPrint");
    this.setColour(Blockly.Blocks.lcd.HUE);
    this.appendValueInput("TEXT")
      .appendField("Print to LCD")
      .appendField(Blockly.Msg.ARD_LCD_PRINT);
    this.appendDummyInput()
      .appendField("lcd#")
      .appendField(
        new Blockly.FieldDropdown([["1"], ["2"], ["3"], ["4"]]),
        "ID"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARD_LCD_PRINT_TIP);
  },
};

Blockly.Blocks["lcd_set_cursor"] = {
  /**
   * Block for creating a lcd.setCursor() function.
   * @this Blockly.Block
   */
  init: function () {
    this.setHelpUrl("http://arduino.cc/en/Reference/LiquidCrystalSetCursor");
    this.setColour(Blockly.Blocks.lcd.HUE);
    this.appendValueInput("COL")
      .appendField("Set Cursor")
      .appendField("Col")
      .setCheck(Blockly.Types.NUMBER.checkList);
    this.appendValueInput("ROW")
      .appendField("Row")
      .setCheck(Blockly.Types.NUMBER.checkList);
    this.appendDummyInput()
      .appendField("lcd#")
      .appendField(
        new Blockly.FieldDropdown([["1"], ["2"], ["3"], ["4"]]),
        "ID"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARD_LCD_SET_CURSOR_TIP);
  },
};

Blockly.Blocks["lcd_clear"] = {
  /**
   * Block for creating a lcd.clear() function.
   * @this Blockly.Block
   */
  init: function () {
    this.setHelpUrl("http://arduino.cc/en/Reference/LiquidCrystalClear");
    this.setColour(Blockly.Blocks.lcd.HUE);
    this.appendDummyInput()
      .appendField("Clear LCD")
      .appendField("lcd#")
      .appendField(
        new Blockly.FieldDropdown([["1"], ["2"], ["3"], ["4"]]),
        "ID"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARD_LCD_CLEAR_TIP);
  },
};
