import Card from "./components/card";
import ExtraInformation from "./components/ExtraInformation";
import Header from "./components/header";
import Sidenav from "./components/sidenav";
import { Button } from "./components/ui/button";
import { ModalCodeSnippet, TooltipCodeSnippet } from "./lib/constants";

function App() {
  return (
    <div className="grid grid-cols-12 h-full text-white">
      <div className="col-span-2 px-4 py-6 border-r-2 border-r-gray-700">
        <Sidenav />
      </div>
      <div className="flex flex-col gap-4 col-span-10 px-4 py-6">
        <Header title="Home" />
        <div className="flex gap-4">
          <Card title="Extra Information Modal" codeSnippet={ModalCodeSnippet}>
            <div className="flex gap-x-2">
              <p>
                You can <span className="border-b">CLICK</span> this icon
              </p>
              <ExtraInformation
                type="modal"
                title="Modal Title"
                actions={
                  <Button
                    variant="destructive"
                    onClick={() => {
                      console.log("Delete");
                    }}
                  >
                    Delete
                  </Button>
                }
              >
                <div>Modal content</div>
              </ExtraInformation>
            </div>
          </Card>
          <Card
            title="Extra Information Tooltip"
            codeSnippet={TooltipCodeSnippet}
          >
            <div className="flex gap-x-2">
              <p>
                You can <span className="border-b">HOVER</span> this icon
              </p>
              <ExtraInformation type="tooltip">
                <div>Tooltip content</div>
              </ExtraInformation>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
