"use server"

export const sendMessageData = async (prevState: any, formData: FormData) => {
    try{
        const rawFormEntries = Object.fromEntries(formData.entries());
        
        console.log(rawFormEntries);

        const discordWebhook = process.env.DISCORD_WEB_HOOK;

if (!discordWebhook) {
  throw new Error("DISCORD_WEB_HOOK is not defined in the environment variables.");
}


        await fetch(discordWebhook, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: rawFormEntries?.username,
              avatar_url: "https://i.imgur.com/mDKlggm.png",
              content: rawFormEntries?.message,
              embeds: [
                {
                  fields: [
                    {
                      name: "Email",
                      value: rawFormEntries?.email,
                      inline: true,
                    },
                    {
                        name: "subject",
                        value: rawFormEntries?.subject,
                        inline: true,
                      },
                  ],
                },
              ],
            }),
          });
          
          return {
            success: true,
            message: `Your message has been sent successfully.`,
          };

    }catch(err:any) {
        console.error(err instanceof Error ? err.message : err);
        return {
            success: false,
            message: `Problem is sending message ${err.message}`,
          };
    }
}




