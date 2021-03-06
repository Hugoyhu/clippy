const defaultIntro = [
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": `Hi there, I'm Clippy! It looks like you want join the Hack Club community. Do you need assistance?`
    }
  },
  {
    "type": "actions",
    "elements": [
      {
        "type": "button",
        "text": {
          "type": "plain_text",
          "emoji": true,
          "text": ":star2:What??? What's this?"
        },
        "action_id": "intro_progress_1"
      },
      {
        "type": "button",
        "text": {
          "type": "plain_text",
          "emoji": true,
          "text": ":money_with_wings:Of course I want free stuff!"
        },
        "action_id": "intro_progress_2"
      },
      {
        "type": "button",
        "text": {
          "type": "plain_text",
          "emoji": true,
          "text": ":eye:Wait what?"
        },
        "action_id": "intro_progress_3"
      }
    ]
  }
]
exports.defaultIntro = defaultIntro

const som = [
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": `Hi, I'm Clippy! My job is to help you get started with the Hack Club Summer of Making. Do you need assistance?`
    }
  },
  {
    "type": "actions",
    "elements": [
      {
        "type": "button",
        "text": {
          "type": "plain_text",
          "emoji": true,
          "text": ":star2:What??? What's this?"
        },
        "action_id": "intro_progress_1"
      },
      {
        "type": "button",
        "text": {
          "type": "plain_text",
          "emoji": true,
          "text": ":money_with_wings:Of course I want free stuff!"
        },
        "action_id": "intro_progress_2"
      },
      {
        "type": "button",
        "text": {
          "type": "plain_text",
          "emoji": true,
          "text": ":eye:Wait what?"
        },
        "action_id": "intro_progress_3"
      }
    ]
  }
]
exports.som = som
