# Project-Web

## Installation Guide

1. Clone the Repository: `git clone https://github.com/luca-naujoks/Project-Web.git`
2. Install dependencies: `npm install` or `yarn install`

## Usage

1. Run Dev Server: `npm run dev` or `yarn dev`
2. Open http://localhost:3000 to View the Site.

## Ai Chat Dependencies

The ai chat behind [/nooble/chat](http://localhost:3000/nooble/chat) is only available with the appropriate API and Google colab ai model.  
The ai used is a LoRA model from the following [git repo](https://github.com/zetavg/LLaMA-LoRA-Tuner).  
The API for the connection has to be written by yourself,  
as there is no js documentation (only python) to use the gradio app directly with nextjs.  

## Python API endpoint (/ai)
My python api server to connect Web and Ai
```yaml
from fastapi import FastAPI
from gradio_client import Client
from fastapi.middleware.cors import CORSMiddleware

# Import Gradio Server https and Ai Model from a Secrets.py file
from Secrets import *

app = FastAPI()
# Allowed origins add your domain if needed
origins = [
    "http://localhost",
    "http://localhost:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    )

def request_gradio(input):
    try:
        client = Client(Gradio_Server)
        result = client.predict(
            Model, "user_and_ai", input, "", "", "", "", "", "", "", 0, 0.75, 40, 2, 1.2, 128, False, False,
            api_name="/inference"
        )
        print(result)
        modified_result = result[0]
        print(modified_result["value"])
        return modified_result["value"]

# Responses an error message if an error occurs
    except ValueError as e:
        error_message = "Im Sorry but i got an Error Please make a Request to the Support or wait until we fixed this error."
        return error_message

# Api endpoit (/ai)
@app.post('/ai')
async def process_request(data: dict):
    message = data.get('message')
    if message:
        result = request_gradio(message)
        return {"result": result}
    else:
        return {"error": "Invalid request"}

```

## Tools & Software
<p align="left">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode" width="90" height="90"/>
<img src="https://cdn.aglty.io/bwql7jyk/Attachments/NewItems/image_20211214122557_0.png" alt="Nextjs" width="90" height="90"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react" width="90" height="90" />
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="tailwindcss" width="90" height="90" />
</p>

## Credits
- [Contributors](https://github.com/luca-naujoks/Project-Web/graphs/contributors)

## Lizenz

The MIT License. Please see [Licence File](https://opensource.org/licenses/MIT) for more information.
