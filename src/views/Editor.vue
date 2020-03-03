<template>
  <div class="home">
      <div class="editor">
    <quill-editor
    class="quill"
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>
    </div>
    <div class="content">
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder=""
        v-model="content">
      </el-input>
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'Editor',
  components: {
    quillEditor
  },
  data(){
            return {
                content:null,
                editorOption:{}
            }
        },
        methods:{
            onEditorBlur(){//失去焦点事件
            },
            onEditorFocus(){//获得焦点事件
            },
            onEditorChange(){//内容改变事件
            }
        }
}
</script>

<style scoped>
.editor {
  padding: 20 auto;
  width: 80%;
}

.content {
  margin-top: 20px;
  width: 80%;
}

.quill {
  height: 100%;
}
</style>