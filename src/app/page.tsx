"use client";

import { ChatRequestOptions, Message } from "ai";
import { useChat } from "ai/react";
import { ChangeEvent, FormEvent, useEffect, useRef, FC } from "react";

const initialMessages = [
  {
    content: "Hola perri",
    role: "user",
    id: "RfIyXqe",
  },
  {
    id: "UOdDD55",
    content: "Hola, ¿en qué puedo ayudarte?",
    role: "assistant",
  },
  {
    content: "Hola perri",
    role: "user",
    id: "RfIyXqe",
  },
  {
    id: "UOdDD55",
    content: "Hola, ¿en qué puedo ayudarte?",
    role: "assistant",
  },
  {
    content: "Hola perri",
    role: "user",
    id: "RfIyXqe",
  },
  {
    id: "UOdDD55",
    content: "Hola, ¿en qué puedo ayudarte?",
    role: "assistant",
  },
  {
    content: "Hola perri",
    role: "user",
    id: "RfIyXqe",
  },
  {
    id: "UOdDD55",
    content: "Hola, ¿en qué puedo ayudarte?",
    role: "assistant",
  },
  {
    content: "Hola perri",
    role: "user",
    id: "RfIyXqe",
  },
  {
    id: "UOdDD55",
    content: "Hola, ¿en qué puedo ayudarte?",
    role: "assistant",
  },
  {
    content: "Hola perri",
    role: "user",
    id: "RfIyXqe",
  },
  {
    id: "UOdDD55",
    content: "Hola, ¿en qué puedo ayudarte?",
    role: "assistant",
  },
  {
    content: "Hola perri",
    role: "user",
    id: "RfIyXqe",
  },
  {
    id: "UOdDD55",
    content: "Hola, ¿en qué puedo ayudarte?",
    role: "assistant",
  },
];

const makeMessageHtmlFromMessage = (message: Message) => {
  const isUser = message.role === "user";
  const classToUse = `rounded-2xl p-4 shadow-sm mb-2 max-w-full flex-grow ${
    isUser ? "bg-rose-400" : "bg-rose-100"
  }`;

  return (
    <div key={message.id} className={classToUse}>
      <strong>{isUser ? "You: " : "Shy Guy: "}</strong>
      {message.content}
    </div>
  );
};

const buttonClass =
  "px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex";

const SubmitButon: React.FC<{ estaCargando: boolean }> = (props) => (
  <>
    {props.estaCargando ? (
      <button
        type="button"
        data-ripple-light="true"
        onClick={stop}
        className={buttonClass}
      >
        Cancel
      </button>
    ) : (
      <button type="submit" data-ripple-light="true" className={buttonClass}>
        Chat
      </button>
    )}
  </>
);

const Chat: React.FC<{}> = () => {
  const { messages, input, handleInputChange, handleSubmit, stop, isLoading } =
    useChat({
      initialMessages: initialMessages as Message[],
    });

  const wrapperHandleInputchange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(event);
    handleInputChange(event);
  };

  const wrapperHandleSubmit = (
    event: FormEvent<HTMLFormElement>,
    ChatRequestOptions?: ChatRequestOptions | undefined
  ) => {
    console.log(event);
    handleSubmit(event);
  };
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex h-screen max-h-full flex-row justify-center overflow-hidden">
      <div className="flex w-1/2 flex-col justify-between">
        <div
          className="flex flex-grow flex-col self-start overflow-y-auto"
          x-data-id="este es el chido"
          ref={chatContainerRef}
        >
          {/* Aqui empieza la lista de mensajes */}
          {messages.map(makeMessageHtmlFromMessage)}
          {/* Aqui empieza el input box */}
        </div>

        <div className="flex h-40 justify-center">
          <form onSubmit={wrapperHandleSubmit}>
            <div className="flex">
              <input
                value={input}
                placeholder="Say something..."
                onChange={wrapperHandleInputchange}
              />
              <SubmitButon estaCargando={isLoading} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Chat;
