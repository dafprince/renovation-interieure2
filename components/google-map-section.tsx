"use client"

export default function GoogleMapSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Où nous trouver</h2>
          <p className="text-lg text-muted-foreground">Visitez notre showroom et atelier à Lyon</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">RénoVision - Siège social</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <div className="font-semibold text-primary mb-1">Adresse</div>
                <p>45 Avenue Jean Jaurès</p>
                <p>69007 Lyon, France</p>
              </div>
              <div>
                <div className="font-semibold text-primary mb-1">Téléphone</div>
                <a href="tel:+33472123456" className="hover:text-accent transition-colors">
                  +33 4 72 12 34 56
                </a>
              </div>
              <div>
                <div className="font-semibold text-primary mb-1">Email</div>
                <a href="mailto:contact@renovision.fr" className="hover:text-accent transition-colors">
                  contact@renovision.fr
                </a>
              </div>
              <div>
                <div className="font-semibold text-primary mb-1">Horaires d'ouverture</div>
                <p>Lundi - Vendredi : 8h00 - 18h00</p>
                <p>Samedi : 9h00 - 12h00</p>
                <p>Dimanche : Fermé</p>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-lg overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6268447558896!2d4.842619315674!3d45.75019197910573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2s45%20Avenue%20Jean%20Jaur%C3%A8s%2C%2069007%20Lyon!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
