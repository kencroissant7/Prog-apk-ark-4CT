namespace ZadanieSamodzielne;

public partial class GaleriaPage : ContentPage
{
	public GaleriaPage()
	{
		InitializeComponent();
	}

    private void OnFoto1Clicked(object sender, EventArgs e)
    {
         foto2.Rotation = 90;
    }
    private void OnFoto2Clicked(object sender, EventArgs e)
    {
        foto1.Opacity = 0.5;
    }
    private void OnFoto3Clicked(object sender, EventArgs e)
    {
        foto3.Scale = 2.5;
    }
}