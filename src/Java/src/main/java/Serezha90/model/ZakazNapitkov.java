package Serezha90.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Serezha90.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ЗаказНапитков
 */
@Entity(name = "IISSerezha90ЗаказНапитков")
@Table(schema = "public", name = "ЗаказНапитков")
public class ZakazNapitkov {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Комментарий")
    private String комментарий;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Napitki")
    @Convert("Napitki")
    @Column(name = "Напитки", length = 16, unique = true, nullable = false)
    private UUID _napitkiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Napitki", insertable = false, updatable = false)
    private Napitki napitki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zakazy")
    @Convert("Zakazy")
    @Column(name = "Заказы", length = 16, unique = true, nullable = false)
    private UUID _zakazyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zakazy", insertable = false, updatable = false)
    private Zakazy zakazy;


    public ZakazNapitkov() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКомментарий() {
      return комментарий;
    }

    public void setКомментарий(String комментарий) {
      this.комментарий = комментарий;
    }


}