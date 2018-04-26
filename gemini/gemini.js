const config = [{
    kind:'Avatar',
    stories:['size S','size M'],
},
{
    kind:'ChatField',
    stories:['User message','Other people message'],
},
{
    kind:'InstanceSummaryElement',
    stories:['with "light" modifier (for chat)','without modifier (for chats/contacts lists)'],
},
{
    kind:'Footer',
    stories:['Send'],
},
{
    kind:'Header',
    stories:['ChatHeader'],
},
{
    kind:'GroupChatSettings',
    stories:['no modifiers'],
}];

for (const {kind, stories} of config) {
    gemini.suite(kind, () => {
        for (const story of stories) {
            gemini.suite(story, suite => {
                suite
                    .setUrl(`iframe.html?selectedKind=${encodeURIComponent(kind)}&selectedStory=${encodeURIComponent(story)}`)
                    .setCaptureElements('#root')
                    .capture(story)
            })
        }
    })
}