using Microsoft.Maui.Controls;

namespace ZadanieSamodzielne;

public partial class QuizPage : ContentPage
{
    // Lista pytań i odpowiedzi
    private List<(string Question, string Option1, string Option2, int CorrectOption)> quiz = new()
    {
        ("Ile mam lat?","41", "18", 2),
        ("Gdzie sie urodziłem?", "Pszczyna", "Bielsko-Biała", 1),
        ("Na jakim kierunku jestem?", "Programowanie", "Mechanik", 1),
        ("Czy mam siostre?", "Tak", "Nie", 1),
        ("czy lubie czolgi", "Tak", "Nie", 1)
    };

    private int currentQuestionIndex = 0;
    private int score = 0;

    public QuizPage()
    {
        InitializeComponent();
        ShowQuestion();
    }

    private void ShowQuestion()
    {
        if (currentQuestionIndex < quiz.Count)
        {
            var q = quiz[currentQuestionIndex];

            QuestionLabel.Text = q.Question;
            Option1.Content = q.Option1;
            Option2.Content = q.Option2;

            Option1.IsChecked = false;
            Option2.IsChecked = false;

            ResultLabel.Text = "";

            // Ukryj przycisk jeśli to ostatnie pytanie
            NextButton.IsVisible = true;
        }
        else
        {
            // Koniec quizu
            QuestionLabel.Text = "Koniec quizu!";
            Option1.IsVisible = false;
            Option2.IsVisible = false;
            NextButton.IsVisible = false; // ukrycie przycisku

            ResultLabel.Text = $"Twój wynik: {score}/{quiz.Count}";
        }
    }

    private void OnNextClicked(object sender, EventArgs e)
    {
        // Sprawdzenie odpowiedzi
        int selected = Option1.IsChecked ? 1 : Option2.IsChecked ? 2 : 0;
        int correctOption = quiz[currentQuestionIndex].CorrectOption;

        if (selected == correctOption)
        {
            score++;
        }

        currentQuestionIndex++;
        ShowQuestion();
    }
}