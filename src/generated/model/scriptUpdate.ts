/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */
import type { ScriptUpdateContent } from './scriptUpdateContent';
import type { ScriptUpdateTimer } from './scriptUpdateTimer';
import type { ScriptUpdateTimerId } from './scriptUpdateTimerId';
import type { ScriptUpdateTitle } from './scriptUpdateTitle';

export interface ScriptUpdate {
  content?: ScriptUpdateContent;
  timer?: ScriptUpdateTimer;
  timer_id?: ScriptUpdateTimerId;
  title?: ScriptUpdateTitle;
}
