import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { db } from "../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";

export default function Articals() {
  const editorRef = useRef(null);

  const handleSave = async () => {
    if (!editorRef.current) return;
    const content = editorRef.current.getContent();

    if (!content.trim()) {
      swal.fire({
        icon: 'warning',
        title: 'Content is empty! ❌',
      });
      return;
    }

    try {
      await addDoc(collection(db, "Articles"), {
        content,
        createdAt: serverTimestamp(),
      });
      Swal.fire({
        icon: 'success',
        title: 'Article saved successfully! ✅',
      });
      editorRef.current.setContent("");
    } catch (error) {
      console.error("Firebase Error:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error saving article! ❌',
      });
    }
  };

  return (
    <div style={{ width: "85%", margin: "20px auto" }}>
      <h2
        className="font-bold text-2xl"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        ✍️ Write Your Article
      </h2>

      <Editor
        apiKey="b6szh29oaowrwl539se8axd97k8qhkhdab50hk028q1jm45v"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Write your article here...</p>"
       init={{
  height: 600,
  menubar: "file edit insert view format table tools help",
  plugins: [
    "advlist autolink lists link image charmap preview anchor",
    "searchreplace visualblocks code fullscreen",
    "insertdatetime media table code help wordcount",
    "emoticons autosave hr visualchars nonbreaking",
  ],
  toolbar:
    "undo redo | blocks fontselect fontsizeselect | " +
    "bold italic underline forecolor backcolor | " +
    "alignleft aligncenter alignright alignjustify | " +
    "bullist numlist outdent indent | " +
    "link unlink image media | " +   // ← مهم جدًا
    "blockquote h1 h2 h3 removeformat | " +
    "code fullscreen preview | help",

  content_style:
    "body { font-family:Helvetica,Arial,sans-serif; font-size:16px; line-height:1.6; direction: auto;}",
  branding: false,

  // ✅ السماح برفع الصور من الجهاز
  automatic_uploads: true,
  file_picker_types: "image media",
  file_picker_callback: (cb, value, meta) => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute(
      "accept",
      meta.filetype === "image" ? "image/*" : "video/*"
    );

    input.onchange = function () {
      const file = this.files[0];
      const reader = new FileReader();
      reader.onload = function () {
        const id = "blobid" + new Date().getTime();
        const blobCache = window.tinymce.activeEditor.editorUpload.blobCache;
        const base64 = reader.result.split(",")[1];
        const blobInfo = blobCache.create(id, file, base64);
        blobCache.add(blobInfo);
        cb(blobInfo.blobUri(), { title: file.name });
      };
      reader.readAsDataURL(file);
    };
    input.click();
  },
}}

      />

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          onClick={handleSave}
          style={{
            backgroundColor: "#ff8c00",
            color: "#fff",
            border: "none",
            padding: "12px 30px",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          💾 Save
        </button>
      </div>
    </div>
  );
}
