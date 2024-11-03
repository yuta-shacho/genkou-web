import type { FC } from 'react'
import { useFetchScriptScriptsScriptIdGetSuspense } from '@/shared/api'
import { rawScriptToScript } from '@/shared/models/script'
import { notFound } from '@tanstack/react-router'
import { ScriptEditorPresentational } from './presentational'

export interface ScriptEditorContainerProps {
  scriptId: string
}

export const ScriptEditorContainer: FC<ScriptEditorContainerProps> = ({ scriptId }) => {
  const { data: response } = useFetchScriptScriptsScriptIdGetSuspense(scriptId)
  if (response.status !== 200)
    throw notFound()
  const script = rawScriptToScript(response.data)

  return <ScriptEditorPresentational {...script} />
}
