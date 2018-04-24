const config = [{
    kind:'Avatar',
    stories:['size S','size M'],
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