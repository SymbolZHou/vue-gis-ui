import formCreate from '@form-create/naive-ui'
import install from '@form-create/naive-ui/auto-import'
import { NTreeSelect } from 'naive-ui'
import {
  EMTree,
  EMIconSelect,
  EMQuillEditor,
  EMRadioButton
} from '@/components/FormCreate/index.js'

export const setupFormCreate = (app) => {
  formCreate.use(install)
  app.use(formCreate)
  app.component(NTreeSelect.name, NTreeSelect)
  app.component(EMTree.name, EMTree)
  app.component(EMIconSelect.name, EMIconSelect)
  app.component(EMRadioButton.name, EMRadioButton)
  app.component('EMQuillEditor', EMQuillEditor)
}
