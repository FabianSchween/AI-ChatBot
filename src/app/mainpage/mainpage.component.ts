import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import OpenAI from 'openai';





@Component({
  selector: 'app-mainpage',
  imports: [FormsModule, CommonModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {
  lorem: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium molestiae libero ex doloremque voluptates quae vero esse voluptate incidunt voluptas nulla, ad recusandae tempore dignissimos animi rerum repellendus quasi. Maiores?";
  counter: number = -1;
  messageArray: string[] = [];
  userinput: string = '';

  trackByIndex(index: number): number {
  return index;
}

  async messageFunction(){
    if(this.userinput=='') return; 

    this.messageArray.push(`USER: ${this.userinput}`);


  const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: 'your-own-key;)'

  });

  const response = await openai.responses.create({
    model:'gpt-4',
    instructions: 'You act as a Chatbot assistant. Just answer in short but effective sentences.',
    input: this.userinput
  });
  console.log(response.output_text);

  this.messageArray.push(`ChatGPT: ${response.output_text}`);
  this.userinput = '';
    
  }


  


}
