
class Note {
  String id;
  String userid;
  String title;
  String? content;
  DateTime? dateadded;

  Note({
    required this.id,
    required this.userid,
    required this.title,
    this.content,
    this.dateadded,
  });

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'userid': userid,
      'title': title,
      'content': content,
      'dateadded': dateadded?.toIso8601String(),
    };
  }

  factory Note.fromMap(Map<String, dynamic> map) {
    return Note(
      id: map['id'] as String,
      userid: map['userid'] as String,
      title: map['title'] as String,
      content: map['content'] != null ? map['content'] as String : null,
      dateadded:
          map['dateadded'] != null ? DateTime.tryParse(map['dateadded']) : null,
    );
  }

  // String toJson() => json.encode(toMap());

  // factory Note.fromJson(String source) => Note.fromMap(json.decode(source) as Map<String, dynamic>);
}
