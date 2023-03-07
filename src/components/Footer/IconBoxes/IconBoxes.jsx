import "./iconBoxes.scss";
import award1 from "../../../assets/testsieger-bild.png";
import award2 from "../../../assets/sammelbild_rahmen.png";
import award3 from "../../../assets/handelsblatt_siegel.png";

export const IconBoxes = () => {
  return (
    <div className="footer-box">
      <div className="footer-info">
        <h3>Susu Shop</h3>
        <p>
          Deutschlands Nr. 1 für B2B Kunden mit über 7 Mio. zufriedenen Kunden.
          Günstige Preise direkt vom Großhandel und GRATIS Kekse, Fruchtgummis &
          Kaffee. In den Sortimenten Bürobedarf, Reinigungs- und Hygieneartikel,
          Arbeitsschutz, Lebensmittel, Catering, Werkzeug & Garten. Unser
          Sortiment deckt nicht nur Kopierpapier, Ordner und Aktenvernichter ab.
          Auch Büromöbel wie Aktenschrank und Bürostuhl oder Büroartikel wie
          Kugelschreiber und Briefumschläge führen wir in großer Auswahl. Unser
          Großhandel bietet Ihnen somit insgesamt über 200.000 Artikel. Bei
          unseren Produkten setzen wir natürlich auf Markenqualität von
          namhaften Herstellern wie Leitz, Herlitz, Makita, Bosch, Edding, Tesa
          oder HP. Somit finden Sie bei uns alles Nötige für Ihren Betrieb vom
          Farblaserdrucker und Etikettendrucker bis hin zum Whiteboard. Eine
          große Auswahl direkt und unkompliziert aus einer Hand. Einen guten
          B2B-Onlineshop für Gewerbe zeichnen aber nicht nur ein großes
          Produktsortiment und günstige Preise aus, sondern auch schnelle
          Lieferzeiten. Bei einer Online-Bestellung bis 17.00 Uhr (Montag bis
          Freitag) geht Lagerware bei der SusuShop noch am selben Tag in den
          Versand. So sind Ihre Artikel nicht nur schnell und einfach online
          bestellt, sondern auch im Handumdrehen auf dem Weg zu Ihnen. Auch
          vielfältige Zahlungsmöglichkeiten spielen bei der Auswahl des
          richtigen Anbieters eine entscheidende Rolle: Bei uns können Sie Ihren
          Einkauf auf Rechnung bestellen, aber auch per Lastschrift, PayPal,
          Kreditkarte, Sofortüberweisung, Paydirekt oder Vorkasse zahlen. Jetzt
          warten noch tolle GRATIS Geschenke auf Sie! Ab einem Nettowarenwert
          von 20 Euro erhalten Sie von uns verschiedene GRATIS Produkte wie
          Kekse, Schokolade, Fruchtgummis und Kaffee. Und sollte doch einmal
          etwas nicht in Ordnung sein, ermöglicht die einfache und kostenlose
          Online-Rücksendung einen reibungslosen Ablauf. Der 1. Platz für beste
          Servicequalität (Kategorie Bürobedarf) bei Testbild zeigt einmal mehr,
          dass Sie als Kunde bei uns an erster Stelle stehen.
        </p>
      </div>

      <div className="awards">
        <div className="awards-tumb">
          <img src={award1} alt="Geprute Leitungen" />
        </div>
        <div className="awards-tumb">
          <img src={award3} alt="Geprute Leitungen" />
        </div>
        <div className="awards-tumb">
          <img src={award2} alt="Geprute Leitungen" />
        </div>
      </div>
    </div>
  );
};
