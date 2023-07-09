import csv
import json

questions = []

with open('shisutan.csv', 'r', encoding="utf-8") as csvfile:
    reader = csv.reader(csvfile)
    for i, row in enumerate(reader, start=1):
        questions.append({
            'questionNumber': i,
            'englishSentence': row[0],
            'japaneseTranslation': row[1]
        })

# PythonのリストをJavaScriptのリストに変換する
js_questions = json.dumps(questions, ensure_ascii=False)

# JavaScriptのリストを出力する
with open("a.txt", "w",encoding="utf-8") as txt:
    print('var questions = ' + js_questions + ';', end="", file=txt)
