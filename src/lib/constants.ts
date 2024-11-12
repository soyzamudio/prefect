export const ModalCodeSnippet = `import ExtraInformation from "./components/ExtraInformation";

<ExtraInformation
  type="modal"
  title="Modal Title"
  actions={
                  
    <Button
      variant="destructive"
      onClick={() => {
        console.log("Delete");
      }
    }
  >
    Delete
  </Button>
}
>
  <div>Modal content</div>
</ExtraInformation>`;

export const TooltipCodeSnippet = `import ExtraInformation from "./components/ExtraInformation";

<ExtraInformation type="tooltip">
  <div>Tooltip content</div>
</ExtraInformation>`;