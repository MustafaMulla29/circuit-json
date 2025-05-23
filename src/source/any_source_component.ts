import { z } from "zod"
import {
  source_simple_resistor,
  type SourceSimpleResistor,
} from "./source_simple_resistor"
import {
  source_simple_capacitor,
  type SourceSimpleCapacitor,
} from "./source_simple_capacitor"
import {
  source_simple_diode,
  type SourceSimpleDiode,
} from "./source_simple_diode"
import {
  source_simple_ground,
  type SourceSimpleGround,
} from "./source_simple_ground"
import { source_simple_bug } from "./source_simple_bug"
import { source_simple_chip, type SourceSimpleChip } from "./source_simple_chip"
import { source_led, type SourceLed } from "./source_led"
import {
  source_simple_power_source,
  type SourceSimplePowerSource,
} from "./source_simple_power_source"
import {
  source_simple_battery,
  type SourceSimpleBattery,
} from "./source_simple_battery"
import {
  source_simple_inductor,
  type SourceSimpleInductor,
} from "./source_simple_inductor"
import {
  source_simple_push_button,
  type SourceSimplePushButton,
} from "./source_simple_push_button"
import {
  source_simple_potentiometer,
  type SourceSimplePotentiometer,
} from "./source_simple_potentiometer"
import {
  source_simple_crystal,
  type SourceSimpleCrystal,
} from "./source_simple_crystal"
import {
  source_simple_pin_header,
  type SourceSimplePinHeader,
} from "./source_simple_pin_header"
import {
  source_simple_resonator,
  type SourceSimpleResonator,
} from "./source_simple_resonator"
import {
  source_simple_transistor,
  type SourceSimpleTransistor,
} from "./source_simple_transistor"
import {
  source_simple_mosfet,
  type SourceSimpleMosfet,
} from "./source_simple_mosfet"
import {
  source_simple_switch,
  type SourceSimpleSwitch,
} from "./source_simple_switch"
import {
  source_project_metadata,
  type SourceProjectMetadata,
} from "./source_project_metadata"

export const any_source_component = z.union([
  source_simple_resistor,
  source_simple_capacitor,
  source_simple_diode,
  source_simple_ground,
  source_simple_chip,
  source_simple_bug,
  source_led,
  source_simple_power_source,
  source_simple_battery,
  source_simple_inductor,
  source_simple_push_button,
  source_simple_potentiometer,
  source_simple_crystal,
  source_simple_pin_header,
  source_simple_resonator,
  source_simple_switch,
  source_simple_transistor,
  source_simple_mosfet,
  source_project_metadata,
])

/**
 * Deprecated: use `AnySourceElement` instead
 */
export type AnySourceComponent = z.infer<typeof any_source_component>

export type AnySourceElement =
  | SourceSimpleResistor
  | SourceSimpleCapacitor
  | SourceSimpleDiode
  | SourceSimpleGround
  | SourceSimpleChip
  | SourceLed
  | SourceSimplePowerSource
  | SourceSimpleBattery
  | SourceSimpleInductor
  | SourceSimplePushButton
  | SourceSimplePotentiometer
  | SourceSimpleCrystal
  | SourceSimplePinHeader
  | SourceSimpleResonator
  | SourceSimpleSwitch
  | SourceSimpleTransistor
  | SourceSimpleMosfet
  | SourceProjectMetadata
